package com.bakesoft.bakesoft.auth.infra.adapter.outbound.persistence;

import com.bakesoft.bakesoft.auth.domain.model.TokenBlacklist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TokenBlackListRepositoryImpl extends JpaRepository<TokenBlacklist, Long> {
    Optional<TokenBlacklist> findByToken(String token);
}
