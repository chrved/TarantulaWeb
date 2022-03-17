package chr.ved.tarantula.domain.service;

import chr.ved.tarantula.domain.model.Tarantula;
import chr.ved.tarantula.domain.repository.TarantulaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TarantulaServiceImpl implements TarantulaService{
    private final TarantulaRepository tarantulaRepository;

    @Override
    public List<Tarantula> findAll() {
        return tarantulaRepository.findAll();
    }

    @Override
    public Tarantula findById(String id) {
        return tarantulaRepository.findById(id);
    }

    @Override
    public String create(Tarantula tarantula) {
        return tarantulaRepository.create(tarantula);
    }

    @Override
    public void update(Tarantula tarantula) {
        tarantulaRepository.update(tarantula);
    }

    @Override
    public void deleteById(String id) {
        tarantulaRepository.deleteById(id);
    }
}
