import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Project } from "../models/Project";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("ProjectsOnUsers", {
  isAbstract: true
})
export class ProjectsOnUsers {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  assignedBy!: string;

  project?: Project;

  user?: User;
}
