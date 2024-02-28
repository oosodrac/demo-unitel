# Uso da Arquitectura de Microserviços

# Estoque
   - Produto

# Facturacao
   - Factura

# UAA
  - Autenticação e Autorização

# Gateway

# Kafka
   - Broker

# Docker


# Processo de Comunicação 

 - Usuario registra uma factura no sistema de facturação
 - Sistema de facturação envia a mensagem de nova factura para o kafka
 - Sistema de estoque subscrevido no topico de facturacao actualiza a quantidade facturada

# Padrões da arquitectura de microserviço utilizado:

 - Pub/Sub
 - API Gateway
 - Database por serviço
 - Decomposição pelo demonio de negocio
 - Service registry
 - Service discovery

