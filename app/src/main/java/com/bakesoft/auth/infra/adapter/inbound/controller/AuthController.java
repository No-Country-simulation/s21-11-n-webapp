package com.bakesoft.auth.infra.adapter.inbound.controller;


import com.bakesoft.auth.application.dto.AuthResponseDto;
import com.bakesoft.auth.application.dto.LoginRequestDto;
import com.bakesoft.auth.application.dto.RefreshTokenRequest;
import com.bakesoft.auth.application.dto.RegisterRequestDto;
import com.bakesoft.auth.domain.port.AuthService;
import com.bakesoft.auth.infra.config.CurrentUser;
import com.bakesoft.common.exception.BadRequestException;
import com.bakesoft.user.domain.model.User;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponseDto> register(@Valid @RequestBody RegisterRequestDto dto) {
        AuthResponseDto response = authService.register(dto);
        return ResponseEntity.status(201).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login (@Valid @RequestBody LoginRequestDto dto) {
        return ResponseEntity.ok().body(authService.login(dto));
    }

    @SecurityRequirement(name = "bearer-key")
    @GetMapping("/check-login")
    public ResponseEntity<AuthResponseDto> checkLogin (@CurrentUser User user) {
        return ResponseEntity.ok().body(authService.checkLogin(user.getEmail()));
    }

    @SecurityRequirement(name = "bearer-key")
    @PostMapping("/refresh-token")
    public ResponseEntity<AuthResponseDto> refreshToken(@RequestBody @Valid RefreshTokenRequest request)  {
        return ResponseEntity.ok(authService.refreshToken(request.refreshToken()));
    }

    @SecurityRequirement(name = "bearer-key")
    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@RequestHeader("Authorization") String accessToken,
                                       @RequestBody
                                       @Valid
                                       RefreshTokenRequest request) {

        if (!accessToken.startsWith("Bearer ")) {
            throw new BadRequestException("Invalid Authorization header format");
        }

        authService.logout(request.refreshToken(), accessToken.replace("Bearer ", ""));
        return ResponseEntity.noContent().build();
    }

}
