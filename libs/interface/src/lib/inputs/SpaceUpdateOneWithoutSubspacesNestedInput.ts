import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateOrConnectWithoutSubspacesInput } from "../inputs/SpaceCreateOrConnectWithoutSubspacesInput";
import { SpaceCreateWithoutSubspacesInput } from "../inputs/SpaceCreateWithoutSubspacesInput";
import { SpaceUpdateWithoutSubspacesInput } from "../inputs/SpaceUpdateWithoutSubspacesInput";
import { SpaceUpsertWithoutSubspacesInput } from "../inputs/SpaceUpsertWithoutSubspacesInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpdateOneWithoutSubspacesNestedInput", {
  isAbstract: true
})
export class SpaceUpdateOneWithoutSubspacesNestedInput {
  @Field(() => SpaceCreateWithoutSubspacesInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutSubspacesInput | undefined;

  @Field(() => SpaceCreateOrConnectWithoutSubspacesInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutSubspacesInput | undefined;

  @Field(() => SpaceUpsertWithoutSubspacesInput, {
    nullable: true
  })
  upsert?: SpaceUpsertWithoutSubspacesInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;

  @Field(() => SpaceUpdateWithoutSubspacesInput, {
    nullable: true
  })
  update?: SpaceUpdateWithoutSubspacesInput | undefined;
}
