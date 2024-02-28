Uso da Arquitectura de Microserviços

Estoque
  Produto

Facturacao
  Factura

UAA
  Autenticação e Autorização

Gateway

Kafka
  Broker

Docker


Usuario registra uma factura no sistema de facturação
Sistema de facturação envia a mensagem de nova factura para o kafka
Sistema de estoque subscrevido no topico de facturacao actualiza a quantidade facturada

Padrões utilizado:
Pub/Sub
API Gateway
Database por serviço
Decomposição pelo demonio de negocio

