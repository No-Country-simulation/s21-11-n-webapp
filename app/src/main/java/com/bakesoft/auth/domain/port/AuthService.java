package com.bakesoft.auth.domain.port;


import com.bakesoft.auth.application.dto.AuthResponseDto;
import com.bakesoft.auth.application.dto.LoginRequestDto;
import com.bakesoft.auth.application.dto.RegisterRequestDto;

public interface AuthService {
    AuthResponseDto register(RegisterRequestDto dto);
    AuthResponseDto login(LoginRequestDto dto);
    AuthResponseDto checkLogin(String email);
    void logout(String refreshToken , String accessToken);
    AuthResponseDto refreshToken(String refreshToken);
}
