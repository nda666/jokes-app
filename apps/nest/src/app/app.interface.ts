import { Args, Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType('Application', {
  description: 'Application Types',
})
export class AppInterface {
  @Field({
    description: 'Application Name',
    nullable: true,
  })
  name?: string;
  @Field({
    description: 'Application Version',
    nullable: true,
  })
  version?: string;

  @Field({
    description: 'Application Environment',
    nullable: true,
  })
  production?: boolean;
}
