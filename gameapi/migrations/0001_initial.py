# Generated by Django 3.2.7 on 2021-10-12 06:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='HufGame',
            fields=[
                ('gameid', models.AutoField(primary_key=True, serialize=False)),
                ('game_name', models.CharField(blank=True, max_length=20, null=True)),
                ('game_tag', models.CharField(max_length=9)),
                ('no_of_quiz', models.IntegerField()),
                ('game_description', models.CharField(blank=True, max_length=100, null=True)),
                ('total_no_qn', models.IntegerField()),
                ('userid', models.ForeignKey(db_column='id', default=404, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
