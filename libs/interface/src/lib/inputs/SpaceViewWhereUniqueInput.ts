import { Field, InputType } from "@nestjs/graphql";

@InputType("SpaceViewWhereUniqueInput", {
  isAbstract: true
})
export class SpaceViewWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;
}
