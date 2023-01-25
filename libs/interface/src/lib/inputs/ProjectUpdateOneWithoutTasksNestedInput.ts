import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateOrConnectWithoutTasksInput } from "../inputs/ProjectCreateOrConnectWithoutTasksInput";
import { ProjectCreateWithoutTasksInput } from "../inputs/ProjectCreateWithoutTasksInput";
import { ProjectUpdateWithoutTasksInput } from "../inputs/ProjectUpdateWithoutTasksInput";
import { ProjectUpsertWithoutTasksInput } from "../inputs/ProjectUpsertWithoutTasksInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@InputType("ProjectUpdateOneWithoutTasksNestedInput", {
  isAbstract: true
})
export class ProjectUpdateOneWithoutTasksNestedInput {
  @Field(() => ProjectCreateWithoutTasksInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutTasksInput | undefined;

  @Field(() => ProjectCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput | undefined;

  @Field(() => ProjectUpsertWithoutTasksInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutTasksInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @Field(() => ProjectUpdateWithoutTasksInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutTasksInput | undefined;
}
