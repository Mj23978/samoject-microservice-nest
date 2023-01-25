import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateOrConnectWithoutViewInput } from "../inputs/SpaceCreateOrConnectWithoutViewInput";
import { SpaceCreateWithoutViewInput } from "../inputs/SpaceCreateWithoutViewInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateNestedOneWithoutViewInput", {
  isAbstract: true
})
export class SpaceCreateNestedOneWithoutViewInput {
  @Field(() => SpaceCreateWithoutViewInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutViewInput | undefined;

  @Field(() => SpaceCreateOrConnectWithoutViewInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutViewInput | undefined;

  @Field(() => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;
}
