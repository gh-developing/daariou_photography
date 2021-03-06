using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace daariiou_photography_backend.Model
{
    public partial class DaariiouPhotographyDBContext : DbContext
    {
        public DaariiouPhotographyDBContext()
        {
        }

        public DaariiouPhotographyDBContext(DbContextOptions<DaariiouPhotographyDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<KindOfShooting> KindOfShootings { get; set; }
        public virtual DbSet<Picture> Pictures { get; set; }
        public virtual DbSet<Shooting> Shootings { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-PHRL3B6\\SQLEXPRESS;Database=DaariiouPhotographyDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<KindOfShooting>(entity =>
            {
                entity.HasKey(e => e.KoSid);

                entity.ToTable("KindOfShooting");

                entity.Property(e => e.KoSid).HasColumnName("KoSId");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(90)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Picture>(entity =>
            {
                entity.HasKey(e => e.Pid);

                entity.ToTable("Picture");

                entity.Property(e => e.Pid).HasColumnName("PId");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Img)
                    .IsRequired()
                    .HasColumnType("image");

                entity.Property(e => e.IsPublic)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Uid).HasColumnName("UId");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.Pictures)
                    .HasForeignKey(d => d.Uid)
                    .HasConstraintName("FK_Picture_User");
            });

            modelBuilder.Entity<Shooting>(entity =>
            {
                entity.HasKey(e => e.Sid);

                entity.ToTable("Shooting");

                entity.Property(e => e.Sid).HasColumnName("SId");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.KoSid).HasColumnName("KoSId");

                entity.Property(e => e.Rejected)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Uid).HasColumnName("UId");

                entity.HasOne(d => d.KoS)
                    .WithMany(p => p.Shootings)
                    .HasForeignKey(d => d.KoSid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shooting_KindOfShooting");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.Shootings)
                    .HasForeignKey(d => d.Uid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Shooting_User");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Uid);

                entity.ToTable("User");

                entity.HasIndex(e => e.Username, "U_Username")
                    .IsUnique();

                entity.Property(e => e.Uid).HasColumnName("UId");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(120)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(120)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(120)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
