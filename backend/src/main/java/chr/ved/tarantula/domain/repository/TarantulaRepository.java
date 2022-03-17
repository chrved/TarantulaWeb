package chr.ved.tarantula.domain.repository;

import chr.ved.tarantula.domain.model.Tarantula;

import java.util.List;

public interface TarantulaRepository {
    List<Tarantula> findAll();

    Tarantula findById(String id);

    String create(Tarantula tarantula);

    void update(Tarantula tarantula);

    void deleteById(String id);
}
