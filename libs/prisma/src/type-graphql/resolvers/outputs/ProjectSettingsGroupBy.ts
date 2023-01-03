import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectSettingsCountAggregate } from "../outputs/ProjectSettingsCountAggregate";
import { ProjectSettingsMaxAggregate } from "../outputs/ProjectSettingsMaxAggregate";
import { ProjectSettingsMinAggregate } from "../outputs/ProjectSettingsMinAggregate";

@TypeGraphQL.ObjectType("ProjectSettingsGroupBy", {
  isAbstract: true
})
export class ProjectSettingsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  localId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => ProjectSettingsCountAggregate, {
    nullable: true
  })
  _count!: ProjectSettingsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectSettingsMinAggregate, {
    nullable: true
  })
  _min!: ProjectSettingsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectSettingsMaxAggregate, {
    nullable: true
  })
  _max!: ProjectSettingsMaxAggregate | null;
}
