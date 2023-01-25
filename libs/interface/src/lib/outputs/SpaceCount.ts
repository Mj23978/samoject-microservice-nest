import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("SpaceCount", {
  isAbstract: true
})
export class SpaceCount {
  @Field(() => Int, {
    nullable: false
  })
  subspaces!: number;
}
