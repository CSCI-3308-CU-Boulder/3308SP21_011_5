package com.softdev.classview.mapper;

import com.softdev.classview.dto.SectionDto;
import com.softdev.classview.model.Post;
import com.softdev.classview.model.Section;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SectionMapper {
    @Mapping(target = "numberOfPosts", expression = "java(mapPosts(section.getPosts()))")
    SectionDto mapSectionToDto(Section section);

    default Integer mapPosts(List<Post> numberOfPosts) {
        return numberOfPosts.size();
    }

    @InheritInverseConfiguration
    @Mapping(target = "posts", ignore = true)
    Section mapDtoToSection(SectionDto section);
}
