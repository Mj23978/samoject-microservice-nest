import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyCreatorInputEnvelope } from "../inputs/TaskCreateManyCreatorInputEnvelope";
import { TaskCreateOrConnectWithoutCreatorInput } from "../inputs/TaskCreateOrConnectWithoutCreatorInput";
import { TaskCreateWithoutCreatorInput } from "../inputs/TaskCreateWithoutCreatorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutCreatorInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: TaskCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
