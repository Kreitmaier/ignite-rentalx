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

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro
o usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro


**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
o usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 horas
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
O usuário deve estar logado na aplicação
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponivel


# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.
O usuário deve estar logado na aplicação

# Listagem de Alugueis para o usuário

**RF**
Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
O usuário deve estar logado na aplicação


