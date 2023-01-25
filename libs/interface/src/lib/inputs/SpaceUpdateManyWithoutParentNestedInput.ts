import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateManyParentInputEnvelope } from "../inputs/SpaceCreateManyParentInputEnvelope";
import { SpaceCreateOrConnectWithoutParentInput } from "../inputs/SpaceCreateOrConnectWithoutParentInput";
import { SpaceCreateWithoutParentInput } from "../inputs/SpaceCreateWithoutParentInput";
import { SpaceScalarWhereInput } from "../inputs/SpaceScalarWhereInput";
import { SpaceUpdateManyWithWhereWithoutParentInput } from "../inputs/SpaceUpdateManyWithWhereWithoutParentInput";
import { SpaceUpdateWithWhereUniqueWithoutParentInput } from "../inputs/SpaceUpdateWithWhereUniqueWithoutParentInput";
import { SpaceUpsertWithWhereUniqueWithoutParentInput } from "../inputs/SpaceUpsertWithWhereUniqueWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpdateManyWithoutParentNestedInput", {
  isAbstract: true
})
export class SpaceUpdateManyWithoutParentNestedInput {
  @Field(() => [SpaceCreateWithoutParentInput], {
    nullable: true
  })
  create?: SpaceCreateWithoutParentInput[] | undefined;

  @Field(() => [SpaceCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutParentInput[] | undefined;

  @Field(() => [SpaceUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: SpaceUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @Field(() => SpaceCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: SpaceCreateManyParentInputEnvelope | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  set?: SpaceWhereUniqueInput[] | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SpaceWhereUniqueInput[] | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  delete?: SpaceWhereUniqueInput[] | undefined;

  @Field(() => [SpaceWhereUniqueInput], {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput[] | undefined;

  @Field(() => [SpaceUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: SpaceUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @Field(() => [SpaceUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: SpaceUpdateManyWithWhereWithoutParentInput[] | undefined;

  @Field(() => [SpaceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SpaceScalarWhereInput[] | undefined;
}
