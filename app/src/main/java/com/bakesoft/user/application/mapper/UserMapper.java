package com.bakesoft.user.application.mapper;



import com.bakesoft.user.application.dto.UserResponseDto;
import com.bakesoft.user.domain.model.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponseDto toUserResponseDTO(User user);
    List<UserResponseDto> toUserResponseDTO(List<User> user);
}
