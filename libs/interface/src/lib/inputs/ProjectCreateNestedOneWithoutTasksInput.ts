import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutTasksInput } from "../inputs/ProjectCreateOrConnectWithoutTasksInput";
import { ProjectCreateWithoutTasksInput } from "../inputs/ProjectCreateWithoutTasksInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateNestedOneWithoutTasksInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutTasksInput {
  @Field(() => ProjectCreateWithoutTasksInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutTasksInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
