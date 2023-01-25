import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateManyUserInputEnvelope } from "../inputs/ProjectsOnUsersCreateManyUserInputEnvelope";
import { ProjectsOnUsersCreateOrConnectWithoutUserInput } from "../inputs/ProjectsOnUsersCreateOrConnectWithoutUserInput";
import { ProjectsOnUsersCreateWithoutUserInput } from "../inputs/ProjectsOnUsersCreateWithoutUserInput";
import { ProjectsOnUsersWhereUniqueInput } from "../inputs/ProjectsOnUsersWhereUniqueInput";

@InputType("ProjectsOnUsersCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateNestedManyWithoutUserInput {
  @Field(() => [ProjectsOnUsersCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectsOnUsersCreateWithoutUserInput[] | undefined;

  @Field(() => [ProjectsOnUsersCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectsOnUsersCreateOrConnectWithoutUserInput[] | undefined;

  @Field(() => ProjectsOnUsersCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectsOnUsersCreateManyUserInputEnvelope | undefined;

  @Field(() => [ProjectsOnUsersWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectsOnUsersWhereUniqueInput[] | undefined;
}
