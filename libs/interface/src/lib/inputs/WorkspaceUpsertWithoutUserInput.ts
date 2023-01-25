import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceUpdateWithoutUserInput } from "../inputs/WorkspaceUpdateWithoutUserInput";

@InputType("WorkspaceUpsertWithoutUserInput", {
  isAbstract: true
})
export class WorkspaceUpsertWithoutUserInput {
  @Field(() => WorkspaceUpdateWithoutUserInput, {
    nullable: false
  })
  update!: WorkspaceUpdateWithoutUserInput;

  @Field(() => WorkspaceCreateWithoutUserInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutUserInput;
}
