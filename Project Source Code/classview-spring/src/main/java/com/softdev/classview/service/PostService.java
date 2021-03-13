package com.softdev.classview.service;


import com.softdev.classview.dto.PostRequest;
import com.softdev.classview.dto.PostResponse;
import com.softdev.classview.exceptions.SpringPostException;
import com.softdev.classview.exceptions.SpringSectionException;
import com.softdev.classview.mapper.PostMapper;
import com.softdev.classview.model.Post;
import com.softdev.classview.model.Section;
import com.softdev.classview.model.User;
import com.softdev.classview.repository.PostRepository;
import com.softdev.classview.repository.SectionRepository;
import com.softdev.classview.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class PostService {

    private final PostRepository postRepository;
    private final SectionRepository sectionRepository;
    private final UserRepository userRepository;
    private final AuthService authService;
    private final PostMapper postMapper;

    @Transactional(readOnly = true)
    public PostResponse getPost(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new SpringPostException(id.toString()));
        return postMapper.mapToDto(post);
    }

    @Transactional(readOnly = true)
    public List<PostResponse> getAllPosts() {
        return postRepository.findAll()
                .stream()
                .map(postMapper::mapToDto)
                .collect(toList());
    }

    public void save(PostRequest postRequest) {
        Section section = sectionRepository.findByName(postRequest.getSectionName()) //? might need to change
                .orElseThrow(() -> new SpringSectionException(postRequest.getSectionName()));
        postRepository.save(postMapper.map(postRequest, section, authService.getCurrentUser()));
    }

    @Transactional(readOnly = true)
    public List<PostResponse> getPostsBySection(Long sectionId) {
        Section section = sectionRepository.findById(sectionId)
                .orElseThrow(() -> new SpringSectionException(sectionId.toString()));
        List<Post> posts = postRepository.findAllBySection(section);
        return posts.stream().map(postMapper::mapToDto).collect(toList());
    }

    @Transactional(readOnly = true)
    public List<PostResponse> getPostsByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
        return postRepository.findByUser(user)
                .stream()
                .map(postMapper::mapToDto)
                .collect(toList());
    }
}