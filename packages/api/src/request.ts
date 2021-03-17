import { APIGatewayEvent, Context } from 'aws-lambda';




export default class ApiRequest {

    public event: APIGatewayEvent;
    public context: Context;

    constructor(event: APIGatewayEvent, context: Context) {
        this.event = event;
        this.context = context;

    }

}