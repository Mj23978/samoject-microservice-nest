import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutUsersInput } from "../inputs/ProjectCreateOrConnectWithoutUsersInput";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutUsersInput {
  @Field(() => ProjectCreateWithoutUsersInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutUsersInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
