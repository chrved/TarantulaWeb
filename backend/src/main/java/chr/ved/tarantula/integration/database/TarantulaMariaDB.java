package chr.ved.tarantula.integration.database;

import chr.ved.tarantula.domain.model.Sex;
import chr.ved.tarantula.domain.model.Tarantula;
import chr.ved.tarantula.domain.repository.TarantulaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TarantulaMariaDB implements TarantulaRepository {

    private List<Tarantula> list;
    public TarantulaMariaDB(){
        this.list = new ArrayList<>();
        createDummyList();
    }

    private void createDummyList() {
        Tarantula t1 = new Tarantula();
        t1.setId("12345");
        t1.setName("t1");
        t1.setDob("2022-01-01");
        t1.setAcquired("2022-02-02");
        t1.setSex(Sex.UNSEXED);
        this.list.add(t1);
        Tarantula t2 = new Tarantula();
        t2.setId("6789");
        t2.setName("t2");
        t2.setDob("2022-03-03");
        t2.setAcquired("2022-04-04");
        t2.setSex(Sex.MALE);
        this.list.add(t2);
        Tarantula t3 = new Tarantula();
        t3.setId("54321");
        t3.setName("t3");
        t3.setDob("2022-05-05");
        t3.setAcquired("2022-06-06");
        t3.setSex(Sex.FEMALE);
        this.list.add(t3);
    }

    @Override
    public List<Tarantula> findAll() {
        return this.list;
    }

    @Override
    public Tarantula findById(String id) {
        return this.list.stream().filter(t -> t.getId().equals(id)).findFirst().orElse(null);
    }

    @Override
    public String create(Tarantula tarantula) {
        return null;
    }

    @Override
    public void update(Tarantula tarantula) {

    }

    @Override
    public void deleteById(String id) {

    }
}
