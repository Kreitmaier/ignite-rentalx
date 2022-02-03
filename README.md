# Cadastro de Carro

**RF** => Requisitos Funcionais
Deve ser possível cadastrar um novo carro


**RNF** => Requisitos não Funcionais

**RN** => Regra de Negócio
Não deve ser possivel cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padão com disponibilidade.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de Carros

**RF**
Deve ser possivel listar todos os carros disponíveis.
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**RNF**

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possivel listar todas as especificações
Deve ser possivel lisar todos os carros

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro
o usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro
Deve ser possivel listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
o usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 horas
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro







