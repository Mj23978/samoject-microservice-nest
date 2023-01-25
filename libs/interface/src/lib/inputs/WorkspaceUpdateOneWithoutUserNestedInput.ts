import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateOrConnectWithoutUserInput } from "../inputs/WorkspaceCreateOrConnectWithoutUserInput";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceUpdateWithoutUserInput } from "../inputs/WorkspaceUpdateWithoutUserInput";
import { WorkspaceUpsertWithoutUserInput } from "../inputs/WorkspaceUpsertWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@InputType("WorkspaceUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class WorkspaceUpdateOneWithoutUserNestedInput {
  @Field(() => WorkspaceCreateWithoutUserInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutUserInput | undefined;

  @Field(() => WorkspaceCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | undefined;

  @Field(() => WorkspaceUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: WorkspaceUpsertWithoutUserInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;

  @Field(() => WorkspaceUpdateWithoutUserInput, {
    nullable: true
  })
  update?: WorkspaceUpdateWithoutUserInput | undefined;
}
