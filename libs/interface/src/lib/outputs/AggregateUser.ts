import { Field, ObjectType } from "@nestjs/graphql";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";

@ObjectType("AggregateUser", {
  isAbstract: true
})
export class AggregateUser {
  @Field(() => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @Field(() => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @Field(() => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
