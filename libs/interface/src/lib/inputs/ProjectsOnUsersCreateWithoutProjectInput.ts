import { Field, InputType } from "@nestjs/graphql";
import { UserCreateNestedOneWithoutProjectsInput } from "../inputs/UserCreateNestedOneWithoutProjectsInput";

@InputType("ProjectsOnUsersCreateWithoutProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateWithoutProjectInput {
  @Field(() => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;

  @Field(() => UserCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProjectsInput;
}
