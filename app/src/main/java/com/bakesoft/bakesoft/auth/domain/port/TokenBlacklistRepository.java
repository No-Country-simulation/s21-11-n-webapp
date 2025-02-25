package com.bakesoft.bakesoft.auth.domain.port;


import com.bakesoft.bakesoft.auth.domain.model.TokenBlacklist;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TokenBlacklistRepository {
    Optional<TokenBlacklist> findByToken(String token);
}
