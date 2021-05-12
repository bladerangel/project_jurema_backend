# Project Jurema Backend

### **Observação: Executar dentro dos projetos question1_2_3 e question3 o comando `npm install` e depois o comando `npm start`**

### Questão 1) Acessar a url: **http://localhost:1000/states**

### Questão 2) Acessar a url: **http://localhost:1000/population/sp**

### Questão 3) O servidor question1_2_3 acessará o microserviço question3 via rpc. Acessar a url: **http://localhost:1000/states_rpc**

**Observação: Caso queira analisar os testes unitários do projeto question1_2_3 execute o comando `npm test` e testes de integração execute o comando `npm run test:e2e`**

### Questão 4) Observação: Estou supondo no modelo de dados fornecido na questão e que as chaves das tabelas não são auto incrementais, pois na letra C) o relacionamento users e groups deveria ser many-to-many e necessitaria de criação de outra tabela.

#### A)

`SELECT * FROM users INNER JOIN groups ON users.id = groups.users_id WHERE MONTH(users.created)='01' AND YEAR(users.created)='2013' AND groups.id IN (15, 40);`

#### B)

`SELECT * FROM users WHERE login="admin" AND password=SHA1("admin");`

#### C)

`INSERT INTO users VALUES(5, "user 5", "user 5", "user 5", STR_TO_DATE("01/01/2013", "%d/%m/%Y"));`

`INSERT INTO groups VALUES(20, 5, "group 20", "group 20 user 5");`

`INSERT INTO groups VALUES(33, 5, "group 33", "group 33 user 5");`

#### D)

`SELECT * FROM users INNER JOIN groups ON users.id = groups.users_id INNER JOIN permissions ON groups.id = permissions.groups_id WHERE permissions.id IN (55, 80, 48);`

#### E)

`DELETE FROM permissions;`
`DELETE FROM groups;`
`DELETE FROM users;`

### Questão 5, 6, 7B, 8, 9) Executar dentro do projeto question5_6_7B_8_9 o comando `npm install` e depois o comando `npm start`

**Observação: Coloquei por volta da questão 5 uma promise só para executar todas as questões em ordem**

### Questão 7A)

**Número 4**, pois o código dentro do **_for_** executa 100ms após a execução de atribuição da **_variável i_** e antes disso ocorrer a variável i já possui o valor de 4 que é a última execução da estrutura de repetição.

### 10) Supondo que o servidor é linux, execute os comandos:

`ps axu | grep Z`

`kill -s SIGCHLD ppid`
**Observação: (pid é o id do processo pai)**

### 11) Supondo que o servidor é linux, execute o comando:

`ps -ef | grep node`

### 12) Supondo que o servidor é linux, execute o comando:

`0 10 * * 5 /usr/local/foo-bar.sh`

`22 22 * * 5 /usr/local/foo-bar.sh`

### 13) Arquivos encontram-se na pasta question13
