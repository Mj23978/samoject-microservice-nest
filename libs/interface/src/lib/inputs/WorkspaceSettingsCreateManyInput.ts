import { Field, InputType } from "@nestjs/graphql";

@InputType("WorkspaceSettingsCreateManyInput", {
  isAbstract: true
})
export class WorkspaceSettingsCreateManyInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  workspaceId!: string;
}
