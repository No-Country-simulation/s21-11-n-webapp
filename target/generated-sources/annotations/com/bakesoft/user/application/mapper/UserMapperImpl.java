package com.bakesoft.user.application.mapper;

import com.bakesoft.auth.application.dto.RoleResponseDto;
import com.bakesoft.auth.domain.model.Role;
import com.bakesoft.user.application.dto.UserResponseDto;
import com.bakesoft.user.domain.model.User;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-03-12T23:42:04-0300",
    comments = "version: 1.6.2, compiler: javac, environment: Java 17.0.14 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserResponseDto toUserResponseDTO(User user) {
        if ( user == null ) {
            return null;
        }

        UUID userId = null;
        String email = null;
        Set<RoleResponseDto> roles = null;

        userId = user.getUserId();
        email = user.getEmail();
        roles = roleSetToRoleResponseDtoSet( user.getRoles() );

        Boolean isActive = null;

        UserResponseDto userResponseDto = new UserResponseDto( userId, email, roles, isActive );

        return userResponseDto;
    }

    @Override
    public List<UserResponseDto> toUserResponseDTO(List<User> user) {
        if ( user == null ) {
            return null;
        }

        List<UserResponseDto> list = new ArrayList<UserResponseDto>( user.size() );
        for ( User user1 : user ) {
            list.add( toUserResponseDTO( user1 ) );
        }

        return list;
    }

    protected RoleResponseDto roleToRoleResponseDto(Role role) {
        if ( role == null ) {
            return null;
        }

        UUID roleId = null;
        String name = null;

        roleId = role.getRoleId();
        name = role.getName();

        RoleResponseDto roleResponseDto = new RoleResponseDto( roleId, name );

        return roleResponseDto;
    }

    protected Set<RoleResponseDto> roleSetToRoleResponseDtoSet(Set<Role> set) {
        if ( set == null ) {
            return null;
        }

        Set<RoleResponseDto> set1 = new LinkedHashSet<RoleResponseDto>( Math.max( (int) ( set.size() / .75f ) + 1, 16 ) );
        for ( Role role : set ) {
            set1.add( roleToRoleResponseDto( role ) );
        }

        return set1;
    }
}
