import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("AffectedRowsOutput", {
  isAbstract: true
})
export class AffectedRowsOutput {
  @Field(() => Int, {
    nullable: false
  })
  count!: number;
}
