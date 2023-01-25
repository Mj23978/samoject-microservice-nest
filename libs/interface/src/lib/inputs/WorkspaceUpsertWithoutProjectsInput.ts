import { Field, InputType } from "@nestjs/graphql";
import { WorkspaceCreateWithoutProjectsInput } from "../inputs/WorkspaceCreateWithoutProjectsInput";
import { WorkspaceUpdateWithoutProjectsInput } from "../inputs/WorkspaceUpdateWithoutProjectsInput";

@InputType("WorkspaceUpsertWithoutProjectsInput", {
  isAbstract: true
})
export class WorkspaceUpsertWithoutProjectsInput {
  @Field(() => WorkspaceUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: WorkspaceUpdateWithoutProjectsInput;

  @Field(() => WorkspaceCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutProjectsInput;
}
