package com.softdev.classview.repository;

import com.softdev.classview.model.Post;
import com.softdev.classview.model.Section;
import com.softdev.classview.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllBySection(Section section);
    List<Post> findByUser(User user);
}
