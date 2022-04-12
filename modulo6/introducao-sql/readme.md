Exercício 1

a) VARCHAR(y) - string com no máximo y caracteres.
PRIMARY KEY - Valores únicos, não podem ser null.
FLOAT - Números não inteiros.
DATE - Data

b) SHOW DATABASES - Informações sobre a database utilizada após o comando USE.
SHOW TABLES - Lista com o nome das tabelas criadas.

c) DESCRIBE Actor - Informações sobre cada item da tabela, como o tipo de dados que irão receber, se valor pode ou não ser null, entre outros.

Exercício 2

Adicionando item com mesmo id - Valor duplicado.
Adicionando item sem alguns campos - Faltam valores.
Adicionando item sem nome - Falta nome.
Adicionando item com número onde deveria ser string - Valor incorreto.

Exercício 3

a)

```sql
SELECT * from Actor WHERE gender = "female";
```

b)

```sql
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c) Retornou uma tabela vazia, pois não existem gêneros inválidos na tabela.

d)

```sql
SELECT id, name, salary from Actor WHERE salary < 500000;
```

e) O nome da variável é 'name', como o código estava escrito com 'nome', não funcionou.

EXERCICIO 4

a) A query retorna todos os atores com nome começado em A ou J e que tenham salário maior que 300.000.

b)

```sql
SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)

```sql
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

d)

```sql
SELECT * FROM Actor WHERE (name LIKE "%A%" OR "%a%" OR "%G%" OR "%g%") AND salary BETWEEN 350000 AND 900000;
```

EXERCICIO 5
Não tem o que explicar.

EXERCICIO 6
a)

```sql
SELECT id, nome, avaliacao FROM Filmes WHERE id = "001"
```

b)

```sql
SELECT * FROM Filmes WHERE nome = "Tropa de Elite";
```

c)

```sql
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;
```

EXERCICIO 7
a)

```sql
SELECT * FROM Filmes WHERE nome LIKE "%vida%";
```

b)

```sql
SELECT * FROM Filmes WHERE nome LIKE "%Elite%" OR sinopse LIKE "%Elite%";
```

c)

```sql
SELECT * FROM Filmes;
```

d)

```sql
SELECT * FROM Filmes WHERE (nome LIKE "%Elite%" OR sinopse LIKE "%Elite%") AND avaliacao > 7;
```
