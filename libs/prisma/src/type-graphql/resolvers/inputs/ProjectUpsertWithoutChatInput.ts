import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutChatInput } from "../inputs/ProjectCreateWithoutChatInput";
import { ProjectUpdateWithoutChatInput } from "../inputs/ProjectUpdateWithoutChatInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutChatInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutChatInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutChatInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutChatInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutChatInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutChatInput;
}
