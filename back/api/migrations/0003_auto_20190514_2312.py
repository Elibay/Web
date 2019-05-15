# Generated by Django 2.2.1 on 2019-05-14 23:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190514_2308'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='comment',
            name='movie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='comments', to='api.Movie'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='cinema',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.Cinema'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='movie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.Movie'),
        ),
    ]