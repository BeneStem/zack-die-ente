import {request, RequestHandler, response} from 'alexa-app';

function DuckIntentHandler(this: RequestHandler, alexaRequest: request, alexaResponse: response): void {
  alexaResponse.say('Quack, Quack! Die Ente hat gesprochen');
}

export default DuckIntentHandler;
