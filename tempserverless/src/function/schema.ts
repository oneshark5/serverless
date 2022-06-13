import {
  Provide,
  Inject,
  ServerlessTrigger,
  ServerlessTriggerType,
  Query,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';

@Provide()
export class SchemaController {
  @Inject()
  ctx: Context;

  @ServerlessTrigger(ServerlessTriggerType.HTTP, {
    path: '/api/schema/getLatestOne',
    method: 'get',
  })
  async getLatestOne(@Query('name') name = 'get方法') {
    return `Hello ${name}`;
  }

  @ServerlessTrigger(ServerlessTriggerType.HTTP, {
    path: '/api/schema/save',
    method: 'post',
  })
  async save(@Query('name') name = 'post方法') {
    return `Hello ${name}`;
  }
}