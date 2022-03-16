package chr.ved.tarantula.domain.service;

import chr.ved.tarantula.domain.model.Tarantula;

import java.util.List;

public interface TarantulaService {
    List<Tarantula> findAll();

    Tarantula findById(String id);

    String create(Tarantula tarantula);

    void update(Tarantula tarantula);

    void deleteById(String id);
}
