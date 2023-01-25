import { Field, InputType } from "@nestjs/graphql";

@InputType("ProjectSettingsCreateWithoutProjectInput", {
  isAbstract: true
})
export class ProjectSettingsCreateWithoutProjectInput {
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
  projectId!: string;
}
