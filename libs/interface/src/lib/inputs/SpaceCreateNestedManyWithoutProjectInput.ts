import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateManyProjectInputEnvelope } from "../inputs/SpaceCreateManyProjectInputEnvelope";
import { SpaceCreateOrConnectWithoutProjectInput } from "../inputs/SpaceCreateOrConnectWithoutProjectInput";
import { SpaceCreateWithoutProjectInput } from "../inputs/SpaceCreateWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class SpaceCreateNestedManyWithoutProjectInput {
  @Field(() => [SpaceCreateWithoutProjectInput], {
    nullable: true
  })
  create?: SpaceCreateWithoutProjectInput[] | undefined;

  @Field(() => [SpaceCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutProjectInput[] | undefined;

  @Field(() => SpaceCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: SpaceCreateManyProjectInputEnvelope | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput[] | undefined;
}
