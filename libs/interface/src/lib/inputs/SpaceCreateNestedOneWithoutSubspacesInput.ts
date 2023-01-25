import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateOrConnectWithoutSubspacesInput } from "../inputs/SpaceCreateOrConnectWithoutSubspacesInput";
import { SpaceCreateWithoutSubspacesInput } from "../inputs/SpaceCreateWithoutSubspacesInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateNestedOneWithoutSubspacesInput", {
  isAbstract: true
})
export class SpaceCreateNestedOneWithoutSubspacesInput {
  @Field(() => SpaceCreateWithoutSubspacesInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutSubspacesInput | undefined;

  @Field(() => SpaceCreateOrConnectWithoutSubspacesInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutSubspacesInput | undefined;

  @Field(() => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;
}
