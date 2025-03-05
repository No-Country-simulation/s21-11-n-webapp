package com.bakesoft.auth.infra.adapter.outbound.repository;

import com.bakesoft.auth.domain.model.TokenBlacklist;
import com.bakesoft.auth.domain.port.TokenBlacklistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class TokenBlacklistRepositoryAdapter implements TokenBlacklistRepository {

    private final TokenBlacklistJpaRepository jpaRepository;

    @Override
    public Optional<TokenBlacklist> findByToken(String token) {
        return jpaRepository.findByToken(token);
    }

    @Override
    public void save(TokenBlacklist tokenBlacklist) {
        jpaRepository.save(tokenBlacklist);
    }
}
