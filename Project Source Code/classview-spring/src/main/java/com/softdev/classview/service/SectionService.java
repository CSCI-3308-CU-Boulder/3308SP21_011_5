package com.softdev.classview.service;

import com.softdev.classview.dto.SectionDto;
import com.softdev.classview.exceptions.SpringClassviewException;
import com.softdev.classview.mapper.SectionMapper;
import com.softdev.classview.model.Section;
import com.softdev.classview.repository.SectionRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static java.time.Instant.now;
import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
@Slf4j
public class SectionService {

    private final SectionRepository sectionRepository;
    private final SectionMapper sectionMapper;

    @Transactional
    public SectionDto save(SectionDto sectionDto) {
        Section save = sectionRepository.save(sectionMapper.mapDtoToSection(sectionDto));
        sectionDto.setId(save.getId());
        return sectionDto;
    }

    @Transactional(readOnly = true)
    public List<SectionDto> getAll() {
        return sectionRepository.findAll()
                .stream()
                .map(sectionMapper::mapSectionToDto)
                .collect(toList());
    }

    public SectionDto getSection(Long id) {
        Section section = sectionRepository.findById(id)
                .orElseThrow(() -> new SpringClassviewException("No section found with ID - " + id));
        return sectionMapper.mapSectionToDto(section);
    }
}