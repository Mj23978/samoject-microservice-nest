import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateManyParentInputEnvelope } from "../inputs/SpaceCreateManyParentInputEnvelope";
import { SpaceCreateOrConnectWithoutParentInput } from "../inputs/SpaceCreateOrConnectWithoutParentInput";
import { SpaceCreateWithoutParentInput } from "../inputs/SpaceCreateWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateNestedManyWithoutParentInput", {
  isAbstract: true
})
export class SpaceCreateNestedManyWithoutParentInput {
  @Field(() => [SpaceCreateWithoutParentInput], {
    nullable: true
  })
  create?: SpaceCreateWithoutParentInput[] | undefined;

  @Field(() => [SpaceCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutParentInput[] | undefined;

  @Field(() => SpaceCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: SpaceCreateManyParentInputEnvelope | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput[] | undefined;
}
