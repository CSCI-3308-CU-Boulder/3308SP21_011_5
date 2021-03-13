package com.softdev.classview.controller;

import com.softdev.classview.dto.SectionDto;
import com.softdev.classview.model.Section;
import com.softdev.classview.service.SectionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/section")
@AllArgsConstructor
public class SectionController {

    private final SectionService sectionService;

    @GetMapping
    public List<SectionDto> getAllSections() {
        return sectionService.getAll();
    }

    @GetMapping("/{id}")
    public SectionDto getSection(@PathVariable Long id) {
        return sectionService.getSection(id);
    }

    @PostMapping
    public SectionDto create(@RequestBody @Valid SectionDto sectionDto) {
        return sectionService.save(sectionDto);
    }
}
