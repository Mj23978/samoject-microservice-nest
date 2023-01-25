import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateOrConnectWithoutViewInput } from "../inputs/SpaceCreateOrConnectWithoutViewInput";
import { SpaceCreateWithoutViewInput } from "../inputs/SpaceCreateWithoutViewInput";
import { SpaceUpdateWithoutViewInput } from "../inputs/SpaceUpdateWithoutViewInput";
import { SpaceUpsertWithoutViewInput } from "../inputs/SpaceUpsertWithoutViewInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpdateOneWithoutViewNestedInput", {
  isAbstract: true
})
export class SpaceUpdateOneWithoutViewNestedInput {
  @Field(() => SpaceCreateWithoutViewInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutViewInput | undefined;

  @Field(() => SpaceCreateOrConnectWithoutViewInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutViewInput | undefined;

  @Field(() => SpaceUpsertWithoutViewInput, {
    nullable: true
  })
  upsert?: SpaceUpsertWithoutViewInput | undefined;

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

  @Field(() => SpaceUpdateWithoutViewInput, {
    nullable: true
  })
  update?: SpaceUpdateWithoutViewInput | undefined;
}
