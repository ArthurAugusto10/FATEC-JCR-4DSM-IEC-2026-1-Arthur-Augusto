const express = require('express');
const winston = require('winston');

const app = express();

// Configuração do Logger Estruturado (formato JSON)
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'api-monitoramento' },
  transports: [
    new winston.transports.Console() // O Fluentd capturará o log direto do console
  ],
});

app.get('/', (req, res) => {
  logger.info('Acesso à rota principal realizado com sucesso.', { endpoint: '/' });
  res.send('Aplicação rodando com Logs Estruturados!');
});

app.get('/erro', (req, res) => {
  logger.error('Erro forçado para testar alerta crítico.', { endpoint: '/erro', codigo: 500 });
  res.status(500).send('Erro interno do servidor');
});

app.listen(8080, () => {
  logger.info('Servidor iniciado na porta 8080');
});
